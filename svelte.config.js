import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false, ///BEWARE - this is insecure
		  }
	}
};
