import {Composition, Folder} from 'remotion';
import './fonts';
import {Promo} from './Promo';
import {Cadastro} from './scenes/Cadastro';
import {Categorias} from './scenes/Categorias';
import {Final} from './scenes/Final';
import {Intro} from './scenes/Intro';
import {Recursos} from './scenes/Recursos';
import {Validade} from './scenes/Validade';

export const RemotionRoot = () => (
  <>
    <Composition
      id="InventarioPromo"
      component={Promo}
      durationInFrames={585}
      fps={30}
      width={1080}
      height={1920}
    />
    <Folder name="Cenas">
      <Composition
        id="Intro"
        component={Intro}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          style: {
            backgroundColor: '#0E1A14',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      <Composition
        id="Cadastro"
        component={Cadastro}
        durationInFrames={135}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          style: {
            backgroundColor: '#13251B',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      <Composition
        id="Categorias"
        component={Categorias}
        durationInFrames={105}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          style: {
            backgroundColor: '#0E1A14',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      <Composition
        id="Validade"
        component={Validade}
        durationInFrames={135}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          style: {
            backgroundColor: '#13251B',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      <Composition
        id="Recursos"
        component={Recursos}
        durationInFrames={105}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          style: {
            backgroundColor: '#0E1A14',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      <Composition
        id="Final"
        component={Final}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          style: {
            backgroundColor: '#0E1A14',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
    </Folder>
  </>
);
