import { forwardRef } from 'react';
import type { MapRef, MapProps } from 'react-map-gl';

import MapGL from 'react-map-gl';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

// @ts-ignore
export const Map = forwardRef<
  MapRef,
  Omit<MapProps, 'projection'> & { projection?: MapProps['projection'] }

  // @ts-ignore
>(({ ...other }, ref) => <MapGL ref={ref} mapboxAccessToken={CONFIG.mapboxApiKey} {...other} />);
