import os
import unittest
import argparse


class Svg2React:
    path_to_svg_images = '../src/svgImages'
    util_filepath = os.path.dirname(os.path.abspath(__file__))

    def __init__(self):
        pass

# TODO: Skip first two lines, parse all lines as independent React components until your see </svg>

#     @staticmethod
#     def get_react_file_contents(index, name):
#         return (
#             f"""import {{ motion }} from 'framer-motion'

# export const index = '{index}'

# export const name = '{name}'

# export const Symbol = ({{ variant }}) => {{
#   return (
#     <>
#       <motion.rect
#         x='25'
#         y='22'
#         width='102'
#         height='98'
#         strokeWidth='2'
#         strokeLinecap='square'
#         stroke='#02DFEE'
#         variants={{variant}}
#       />
#       <motion.path
#         d='M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5'
#         strokeWidth='2'
#         stroke='#02DFEE'
#         variants={{variant}}
#       />
#     </>
#   );
# }};

# """)

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

    return parser.parse_args()


class Svg2ReactTests(unittest.TestCase):
    def setUp(self):
        self.svg_2_react = Svg2React()
        self.svg_images_path = f'{Svg2React.util_filepath}/{self.svg_2_react.path_to_svg_images}'

    def test_default_path_to_svg_images_works(self):
        self.assertTrue(os.path.exists(self.svg_images_path))

        with os.scandir(self.svg_images_path) as svg_images:
            for entry in svg_images:
                break
        self.assertEqual('00_Limitless.svg', entry.name)

    def test_get_index_and_name_from_filename(self):
        svg_container_name = '02_Goal-Oriented_Work_Container.svg'

        self.assertEqual('02',
                         Svg2React.get_index_from_filename(svg_container_name))
        self.assertEqual('Goal-Oriented Work',
                         Svg2React.get_name_from_filename(svg_container_name))

#     def test_get_react_file_contents(self):
#         expected_file_contents = """import { motion } from 'framer-motion'

# export const index = '01'

# export const name = 'Share Lessons'

# export const Symbol = ({ variant }) => {
#   return (
#     <>
#       <motion.rect
#         x='25'
#         y='22'
#         width='102'
#         height='98'
#         strokeWidth='2'
#         strokeLinecap='square'
#         stroke='#02DFEE'
#         variants={variant}
#       />
#       <motion.path
#         d='M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5'
#         strokeWidth='2'
#         stroke='#02DFEE'
#         variants={variant}
#       />
#     </>
#   );
# };
# """
#         self.assertEqual(expected_file_contents,
#                          Svg2React.get_react_file_contents('01', 'Share Lessons'))


if __name__ == '__main__':
    unittest.main()
