import { useState, useEffect, createContext, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './SymbolSummary.module.css';
import Symbol_Index from 'components/symbols/Symbols.json';
import { SvgContainer } from 'components/symbolSummary/svgContainer/SvgContainer';
import { PurchaseKeyWithSymbol } from 'components/symbolSummary/buttons/openseaLinks/purchaseKeyWithSymbol/PurchaseKeyWithSymbol';
import { getSummaryPosition } from 'config/Config';
import { SymbolNameContainer } from './symbolNameContainer/SymbolNameContainer';
import { SymbolDescriptionContainer } from './symbolDescriptionContainer/SymbolDescriptionContainer';
import { symbolSelectionContext } from 'App';

export const summaryContext = createContext();

export const SymbolSummary = ({ isSymbolPage }) => {
  const { symbol_id } = useParams();
  const controls = useAnimation();
  const { getHasSymbolBeenTapped } = useContext(symbolSelectionContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (symbol_id) {
      if (getHasSymbolBeenTapped() === true) {
        controls.set('hidden');
      }
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [symbol_id, controls, getHasSymbolBeenTapped]);

  const [symbolName, setSymbolName] = useState();
  useEffect(() => {
    if (symbol_id) {
      setSymbolName(Symbol_Index[symbol_id].name.split('_').join(' '));
    }
  }, [symbol_id]);

  if (symbol_id) {
    // TODO: Get the heroSymbolSvgGrid size and use index to find origin
    const summaryPosition = getSummaryPosition(symbol_id);

    const containerVariant = {
      hidden: { x: 0, y: 0, opacity: 0, zIndex: -1 },
      visible: {
        opacity: 1,
        zIndex: 3,
        transition: { duration: 1 },
      },
    };

    return (
      <summaryContext.Provider value={{ isSymbolPage, symbol_id, symbolName }}>
        <motion.div
          layoutId='SymbolContainer'
          className={
            isSymbolPage ? styles.pageContainer : styles.summaryContainer
          }
          variants={containerVariant}
          animate={controls}>
          {isSymbolPage ? (
            <motion.button
              layoutId='SymbolButton'
              className={styles.backButton}
              onClick={() => {
                navigate(`/${symbol_id}`);
              }}>
              BACK
            </motion.button>
          ) : (
            <>
              <motion.button
                layoutId='SymbolButton'
                className={styles.backButton}
                onClick={() => {
                  navigate(`/symbol/${symbol_id}`);
                }}>
                EXPAND
              </motion.button>
              <motion.button
                className={styles.backButton}
                onClick={() => {
                  navigate('/');
                }}>
                MINIMIZE
              </motion.button>
            </>
          )}
          <SvgContainer />
          <SymbolNameContainer />
          <SymbolDescriptionContainer />
          <PurchaseKeyWithSymbol />
        </motion.div>
      </summaryContext.Provider>
    );
  }
};
