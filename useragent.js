import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const state = {
	userAgent: null,
};

export default {
	getUserAgentAsync: async () => {
		if (!state.userAgent) {
			if (Platform.OS === 'web' || Platform.OS === 'dom') {
				state.userAgent = DeviceInfo.getUserAgent();
			} else {
				state.userAgent = `${DeviceInfo.getApplicationName()}; ${DeviceInfo.getVersion()}; b.${DeviceInfo.getBuildNumber()}; tbd; (${DeviceInfo.getBrand()}; ${DeviceInfo.getSystemName()}; ${DeviceInfo.getSystemVersion()}; ${DeviceInfo.getDeviceType()}; ${DeviceInfo.getDeviceId()})`;
			}
		}
		return state.userAgent;
	}
};
