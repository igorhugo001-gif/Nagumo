import type React from 'react';
import {Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

const RowInner = ({
  product,
  status,
  color,
  style,
}: {
  readonly product: string;
  readonly status: string;
  readonly color: string;
  readonly style?: React.CSSProperties;
}) => (
  <div
    style={{
      width: 900,
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      padding: '36px 44px',
      borderRadius: 32,
      backgroundColor: 'white',
      borderLeft: `24px solid ${color}`,
      fontFamily: 'Poppins, sans-serif',
      boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
      ...style,
    }}
  >
    <div style={{flex: 1}}>
      <div style={{fontSize: 58, fontWeight: 600, color: '#14241B'}}>
        {product}
      </div>
      <div style={{fontSize: 44, fontWeight: 600, color}}>{status}</div>
    </div>
  </div>
);

export const Row = Interactive.create({
  Component: RowInner,
  layout: 'none',
  schema: {
    product: {type: 'string', default: 'Produto', description: 'Produto'},
    status: {type: 'string', default: '', description: 'Situação'},
    color: {type: 'color', default: '#4CAF50', description: 'Cor do alerta'},
  },
});

const ValidadeInner = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Heading"
        style={{
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 96,
          lineHeight: 1.1,
          textAlign: 'center',
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Alertas de
        <br />
        validade
      </Interactive.Div>
      <Interactive.Div
        name="Explanation"
        style={{
          marginTop: 30,
          marginBottom: 80,
          maxWidth: 860,
          color: '#A5D6A7',
          fontFamily: 'Poppins, sans-serif',
          fontSize: 46,
          lineHeight: 1.3,
          textAlign: 'center',
          opacity: interpolate(frame, [8, 22], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        As cores avisam antes de perder produto
      </Interactive.Div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
        <Row
          name="Row ok"
          product="Picanha"
          status="Vence em 20 dias"
          color="#43A047"
          style={{
            opacity: interpolate(frame, [20, 34], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [20, 34], ['-120px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Row
          name="Row alerta"
          product="Linguiça toscana"
          status="Vence em 5 dias"
          color="#F9A825"
          style={{
            opacity: interpolate(frame, [34, 48], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [34, 48], ['-120px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Row
          name="Row vencido"
          product="Coxa de frango"
          status="Vencido"
          color="#E53935"
          style={{
            opacity: interpolate(frame, [48, 62], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [48, 62], ['-120px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            scale: interpolate(frame, [70, 78, 86, 94], [1, 1.05, 1, 1.05], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              output: 'perceptual-scale',
            }),
          }}
        />
      </div>
    </>
  );
};

export const Validade = Interactive.create({
  Component: ValidadeInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
  },
});
