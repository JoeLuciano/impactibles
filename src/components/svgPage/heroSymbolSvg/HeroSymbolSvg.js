import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './HeroSymbolSvg.module.css';
import { HoverSquare } from 'components/svgPage/hoverCircle/HoverCircle';
import { hover_duration, selection_duration } from 'components/svgPage/Config';
import { SymbolSvg } from 'components/symbolSvg/SymbolSvg';
import Symbol_Index from 'components/symbols/Symbols.json';
import { drawPath } from 'components/svgPage/Config';

const svgContainer = {
  static: { scale: 1 },
  focus: { zIndex: 1, scale: 1.2, transition: { duration: hover_duration } },
  selected: {
    zIndex: 2,
    scale: 1.5,
    transition: { duration: selection_duration },
  },
};

export const HeroSymbolSvg = ({ symbolIndex }) => {
  const { symbol_id } = useParams();
  const [svgState, setSvgState] = useState('static');
  const controls = useAnimation();

  const [heroSymbol, setHeroSymbol] = useState('NO SVG');
  useEffect(() => {
    const symbolName = Symbol_Index[symbolIndex].name;

    import(`components/symbols/svgComponents/${symbolName}`).then(
      ({ index, name, description, Symbol }) => {
        setHeroSymbol(
          <Symbol
            index={index}
            name={name}
            description={description}
            variant={drawPath}
          />
        );
      }
    );
  }, [symbolIndex]);

  const navigate = useNavigate();

  useEffect(() => {
    if (symbol_id && symbol_id === symbolIndex) {
      setSvgState('selected');
      controls.start('selected');
    } else if (svgState === 'focus') {
      controls.start('focus');
    } else {
      setSvgState('static');
      controls.start('static');
    }
  }, [symbol_id, symbolIndex, controls, svgState]);

  return (
    <motion.div
      className={styles.svgContainer}
      variants={svgContainer}
      initial='static'
      animate={controls}
      onHoverStart={() => {
        if (svgState === 'static') {
          setSvgState('focus');
        }
      }}
      onHoverEnd={() => {
        if (svgState === 'focus') {
          setSvgState('static');
        }
      }}
      onTap={() => {
        if (symbol_id === symbolIndex && svgState === 'selected') {
          setSvgState('static');
          navigate('/');
        } else if (!symbol_id) {
          setSvgState('selected');
          navigate(`/${symbolIndex}`);
        }
      }}>
      <SymbolSvg>
        <HoverSquare controls={controls} />
        {heroSymbol}
      </SymbolSvg>
    </motion.div>
  );
};
