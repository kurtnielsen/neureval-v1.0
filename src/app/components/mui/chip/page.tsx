import { CONFIG } from 'src/config-global';

import { ChipView } from 'src/sections/_examples/mui/chip-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Chip | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <ChipView />;
}
