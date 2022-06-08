import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Messages = ({ ventasID}) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Gracias por su compra! su id de transacción es: {ventasID}
			</Alert>
		</Stack>
	);
};

export default Messages;