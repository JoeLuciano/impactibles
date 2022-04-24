import os
import unittest
import argparse


class Svg2React:
    path_to_svg_images = '../src/svgImages'
    path_to_svg_components = '../src/components/symbols/svgComponents'
    util_filepath = os.path.dirname(os.path.abspath(__file__))
    relative_svg_images_path = f'{util_filepath}/{path_to_svg_images}'
    relative_svg_components_path = f'{util_filepath}/{path_to_svg_components}'

    def write_symbol_index_json(self):
        with os.scandir(self.relative_svg_images_path) as svg_images:
            with open(f'{Svg2React.relative_svg_components_path}/../Symbol_Index.json', 'w') as symbol_json:
                symbol_json.write('{\n')
                for svg_file in svg_images:
                    if not 'Container' in svg_file.name:
                        continue
                    index = self.get_index_from_filename(svg_file.name)
                    symbol_json.write(f'"{index}": {{\n')
                    react_svg_name = self.get_name_from_filename(svg_file.name)
                    valid_react_svg_name = react_svg_name.replace(' ', '_')
                    symbol_json.write(f'"name": "{valid_react_svg_name}",\n')
                    symbol_json.write('"description": ""\n},\n')
                symbol_json.write('}')

    def create_all_react_components(self):
        with os.scandir(self.relative_svg_images_path) as svg_images:
            for svg_file in svg_images:
                if not 'Container' in svg_file.name:
                    continue
                react_svg_name = self.get_name_from_filename(svg_file.name)
                valid_react_svg_name = react_svg_name.replace(' ', '_')
                print(f'Creating {valid_react_svg_name}.js')
                with open(f'{Svg2React.relative_svg_components_path}/{valid_react_svg_name}.js', 'w') as react_file:
                    react_file.write(
                        self.get_react_file_contents(svg_file.name))

    def get_react_file_contents(self, filename):
        react_symbol_components = ""
        two_tabs = "        "
        for svg_line in self.get_symbol_lines_from_svg_container(filename):
            react_symbol_components += f'\n{two_tabs}{self.get_framer_motion_component(svg_line)}'
        return (
            f"""import {{ motion }} from 'framer-motion'
export const index = '{self.get_index_from_filename(filename)}'
export const name = '{self.get_name_from_filename(filename)}'
export const Symbol = ({{ variant }}) => {{
  return (
    <>{react_symbol_components}
    </>
  );
}};
""")

    def get_symbol_lines_from_svg_container(self, filename):
        symbol_components = []
        filepath = f'{self.relative_svg_images_path}/{filename}'
        with open(filepath) as svg_container:
            for line in svg_container:
                if not self.is_line_to_skip(line):
                    symbol_components.append(line.strip())
        return symbol_components

    @staticmethod
    def is_line_to_skip(line):
        if line.startswith('<svg width="150" height="150"') or line.startswith('<rect x="0.5" y="0.5"') or line.startswith('</svg>'):
            return True
        return False

    @staticmethod
    def get_framer_motion_component(svg_formatted_component):
        svg_with_react_names = svg_formatted_component.replace(
            'stroke-width', 'strokeWidth').replace('stroke-linecap', 'strokeLinecap')
        motion_component = svg_with_react_names.replace('<', '<motion.')
        motion_component_with_variant = motion_component.replace(
            '/>', ' variants={variant}/>')
        return motion_component_with_variant

    @staticmethod
    def get_index_from_filename(filename):
        return filename.split('_')[0]

    @staticmethod
    def get_name_from_filename(filename):
        return ' '.join(filename.split('_')[1:-1])


def get_parsed_args():
    parser = argparse.ArgumentParser(
        description='Translate all Svg Images into React components.')
    parser.add_argument('--path_to_svg_images', dest='path_to_svg_images', action='store', type=str,
                        default=Svg2React.path_to_svg_images, help='Set a custom path to the Svg Images (default: ./../src/svgImages)')
    parser.add_argument('--write_json', dest='write_json', action='store_true',
                        default=False, help='Create a fresh Symbols.json file (default: False)')

    return parser.parse_args()


class Svg2ReactTests(unittest.TestCase):
    def test_default_path_to_svg_images_works(self):
        self.assertTrue(os.path.exists(Svg2React.relative_svg_images_path))
        self.assertTrue(os.path.exists(Svg2React.relative_svg_components_path))

        with os.scandir(Svg2React.relative_svg_images_path) as svg_images:
            for entry in svg_images:
                break
        self.assertEqual('00_Limitless.svg', entry.name)

    def test_get_index_and_name_from_filename(self):
        svg_container_name = '02_Goal-Oriented_Work_Container.svg'

        self.assertEqual('02',
                         Svg2React.get_index_from_filename(svg_container_name))
        self.assertEqual('Goal-Oriented Work',
                         Svg2React.get_name_from_filename(svg_container_name))

    def test_get_symbol_lines_from_svg_container(self):
        svg_container_name = '01_Share_Lessons_Container.svg'
        self.assertEqual(['<rect x="25" y="22" width="102" height="98" stroke="#02DFEE" stroke-width="2" stroke-linecap="square"/>',
                          '<path d="M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5" stroke="#02DFEE" stroke-width="2" stroke-linecap="round"/>'],
                         Svg2React().get_symbol_lines_from_svg_container(svg_container_name))

    def test_get_framer_motion_component(self):
        rect = '<rect x="25" y="22" width="102" height="98" stroke="#02DFEE" stroke-width="2"/>'
        framer_rect = '<motion.rect x="25" y="22" width="102" height="98" stroke="#02DFEE" strokeWidth="2" variants={variant}/>'
        path = '<path d="M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5" stroke="#02DFEE" stroke-width="2" stroke-linecap="round"/>'
        framer_path = '<motion.path d="M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5" stroke="#02DFEE" strokeWidth="2" strokeLinecap="round" variants={variant}/>'
        self.assertEqual(
            framer_rect, Svg2React.get_framer_motion_component(rect))
        self.assertEqual(
            framer_path, Svg2React.get_framer_motion_component(path))

    def test_get_react_file_contents(self):
        svg_container_name = '01_Share_Lessons_Container.svg'
        expected_file_contents = """import { motion } from 'framer-motion'
export const index = '01'
export const name = 'Share Lessons'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.rect x="25" y="22" width="102" height="98" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5" stroke="#02DFEE" strokeWidth="2" strokeLinecap="round" variants={variant}/>
    </>
  );
};
"""
        self.assertEqual(expected_file_contents,
                         Svg2React().get_react_file_contents(svg_container_name))


if __name__ == '__main__':
    # unittest.main()
    args = get_parsed_args()
    if (args.write_json):
        Svg2React().write_symbol_index_json()
    else:
        Svg2React().create_all_react_components()
