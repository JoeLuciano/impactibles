export const svg_pixel_size = 150;
export const stroke_width = 5;
export const hover_duration = 0.2;
export const selection_duration = 1;
export const drawPath = (index) => {
  const row = parseInt(index[0]);
  const col = parseInt(index[1]);

  return {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: (row + col) / 5,
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
};

export const symbol_order = [
  ...['00', '01', '02', '03', '04'],
  ...['10', '11', '12', '13', '14'],
  ...['20', '21', '22', '23', '24'],
  ...['30', '31', '32', '34'],
  ...['40', '41', '42', '43', '44'],
  ...['50', '51', '52', '53', '54'],
  ...['60', '61', '62', '63', '64'],
  ...['70', '71', '72', '73', '74'],
  ...['80', '81', '82', '83', '84'],
  ...['90', '91', '92', '93', '94'],
];
