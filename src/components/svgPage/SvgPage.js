import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SymbolSvg } from 'components/svgPage/symbolSvg/SymbolSvg';
import Symbols from 'components/symbols/Symbols.json';

const drawPath = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    zIndex: 5,
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 2,
        bounce: 0,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

export const SvgPage = () => {
  const [symbolSvgs, setSymbolSvgs] = useState([]);

  useEffect(() => {
    for (var symbol_name in Symbols) {
      import(`components/symbols/svgComponents/${symbol_name}`).then(
        (symbol_svg) => {
          setSymbolSvgs((prev) => [
            ...prev,
            <SymbolSvg key={symbol_svg.name}>
              <symbol_svg.Symbol variant={drawPath} />
            </SymbolSvg>,
          ]);
        }
      );
    }
  }, []);

  return <motion.div>{symbolSvgs}</motion.div>;
};
