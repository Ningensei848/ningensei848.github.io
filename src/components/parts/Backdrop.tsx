import { Backdrop, CircularProgress } from '@mui/material'
import type { Theme } from '@mui/material'

const ProgressBackdrop = ({ flag }: { flag: boolean }) => (
  <Backdrop sx={{ color: '#fff', zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }} open={flag}>
    <CircularProgress color='inherit' />
  </Backdrop>
)

export default ProgressBackdrop
