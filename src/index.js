import component from "@/components/FormGenerator.vue";

const install = (Vue, options) => {
	Vue.component("VueFormGenerator", component);
	if (options && options.validators) {
		for (let key in options.validators) {
			if ({}.hasOwnProperty.call(options.validators, key)) {
				validators[key] = options.validators[key];
			}
		}
	}
};

export default {
	component,
	install
};
