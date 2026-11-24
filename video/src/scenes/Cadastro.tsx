import type React from 'react';
import {Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

const FieldInner = ({
  label,
  value,
  style,
}: {
  readonly label: string;
  readonly value: string;
  readonly style?: React.CSSProperties;
}) => (
  <div
    style={{
      width: 840,
      padding: '22px 36px',
      borderRadius: 24,
      backgroundColor: '#F4F7F4',
      fontFamily: 'Poppins, sans-serif',
      ...style,
    }}
  >
    <div style={{fontSize: 32, color: '#6B7F70', fontWeight: 600}}>
      {label}
    </div>
    <div style={{fontSize: 54, color: '#14241B', fontWeight: 600}}>
      {value}
    </div>
  </div>
);

export const Field = Interactive.create({
  Component: FieldInner,
  layout: 'none',
  schema: {
    label: {type: 'string', default: 'Campo', description: 'Rótulo'},
    value: {type: 'string', default: '', description: 'Valor'},
  },
});

const CadastroInner = () => {
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
          marginBottom: 70,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Cadastre em
        <br />
        segundos
      </Interactive.Div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
          padding: 40,
          borderRadius: 48,
          backgroundColor: 'white',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.35)',
        }}
      >
        <Field
          name="Field código"
          label="Código"
          value="1042"
          style={{
            opacity: interpolate(frame, [12, 24], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [12, 24], ['80px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Field
          name="Field produto"
          label="Produto"
          value="Picanha"
          style={{
            opacity: interpolate(frame, [22, 34], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [22, 34], ['80px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Field
          name="Field categoria"
          label="Categoria"
          value="Bovinos"
          style={{
            opacity: interpolate(frame, [32, 44], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [32, 44], ['80px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Field
          name="Field quantidade"
          label="Quantidade"
          value="12,5 kg"
          style={{
            opacity: interpolate(frame, [42, 54], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [42, 54], ['80px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Field
          name="Field validade"
          label="Validade"
          value="02/12/2026"
          style={{
            opacity: interpolate(frame, [52, 64], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [52, 64], ['80px 0px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Interactive.Div
          name="Save button"
          style={{
            marginTop: 10,
            padding: '28px 0',
            borderRadius: 24,
            backgroundColor: '#4CAF50',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: 56,
            textAlign: 'center',
            opacity: interpolate(frame, [62, 74], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            scale: interpolate(frame, [84, 90, 98], [1, 0.92, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              output: 'perceptual-scale',
            }),
          }}
        >
          Salvar
        </Interactive.Div>
      </div>
      <Interactive.Div
        name="Saved toast"
        style={{
          marginTop: 50,
          padding: '20px 44px',
          borderRadius: 999,
          backgroundColor: '#1F3A2A',
          color: '#A5D6A7',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: 46,
          opacity: interpolate(frame, [92, 104], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [92, 104], ['0px 30px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ✓ Produto salvo
      </Interactive.Div>
    </>
  );
};

export const Cadastro = Interactive.create({
  Component: CadastroInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
  },
});
