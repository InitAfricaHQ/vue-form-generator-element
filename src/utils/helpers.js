import dayjs from "dayjs";

export default {
	formatValueToField(value) {
		if (value != null) {
			let dt = this.schema.format ? dayjs(value, this.schema.format) : new Date(value);
			return dayjs(dt, this.getDateFormat());
		}

		return value;
	},

	formatValueToModel(value) {
		if (value != null) {
			let m = dayjs(value, this.getDateFormat());
			if (this.schema.format) {
				value = dayjs(m, this.schema.format);
			} else {
				value = m.valueOf();
			}
		}

		return value;
	}
};
