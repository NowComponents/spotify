import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>
			<iframe src="https://open.spotify.com/embed/playlist/6jCkTED0V5NEuM8sKbGG1Z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
		</div>
	);
};

createCustomElement('x-179602-embed-playlist', {
	renderer: {type: snabbdom},
	view,
	styles
});
