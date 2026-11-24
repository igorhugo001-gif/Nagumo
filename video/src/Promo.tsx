import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Cadastro} from './scenes/Cadastro';
import {Categorias} from './scenes/Categorias';
import {Final} from './scenes/Final';
import {Intro} from './scenes/Intro';
import {Recursos} from './scenes/Recursos';
import {Validade} from './scenes/Validade';

export const Promo = () => (
  <TransitionSeries name="Cenas">
    <TransitionSeries.Sequence name="Abertura" durationInFrames={90}>
      <Intro
        name="Intro"
        style={{
          backgroundColor: '#0E1A14',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({direction: 'from-right'})}
      timing={linearTiming({durationInFrames: 15})}
    />
    <TransitionSeries.Sequence name="Cadastro" durationInFrames={135}>
      <Cadastro
        name="Cadastro"
        style={{
          backgroundColor: '#13251B',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({direction: 'from-right'})}
      timing={linearTiming({durationInFrames: 15})}
    />
    <TransitionSeries.Sequence name="Categorias" durationInFrames={105}>
      <Categorias
        name="Categorias"
        style={{
          backgroundColor: '#0E1A14',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({direction: 'from-right'})}
      timing={linearTiming({durationInFrames: 15})}
    />
    <TransitionSeries.Sequence name="Validade" durationInFrames={135}>
      <Validade
        name="Validade"
        style={{
          backgroundColor: '#13251B',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({direction: 'from-right'})}
      timing={linearTiming({durationInFrames: 15})}
    />
    <TransitionSeries.Sequence name="Recursos" durationInFrames={105}>
      <Recursos
        name="Recursos"
        style={{
          backgroundColor: '#0E1A14',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={fade()}
      timing={linearTiming({durationInFrames: 15})}
    />
    <TransitionSeries.Sequence name="Final" durationInFrames={90}>
      <Final
        name="Final"
        style={{
          backgroundColor: '#0E1A14',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);
