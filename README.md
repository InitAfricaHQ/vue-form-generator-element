# Vue Form Generator Element
This is an Element Plus UI (https://element-plus.org) Fields for [Vue-form-generator](https://github.com/vue-generators/vue-form-generator). It is the continuation of the original Element UI Field Vue Form Generator work (https://github.com/egorzot/vue-form-generator-element) by Egor Zotov currently. As it is currently unmaintained and has been a useful tool to us. We have decided to continue with it and hope you'd find it helpful and useful.

### Usage

```
npm install @initafricahq/vue-form-generator-element
```

Add following code in main.js:
```
import { createApp } from 'vue'
import App from './App.vue'
import VueFormGeneratorElement from '@initafricahq/vue-form-generator-element'

return createApp(App)
  .use(VueFormGenerator)
  .mount('#app');
```

See usage [example](https://github.com/egorzot/vue-form-generator-element-example).

Fields list:

* [FieldElementInput](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementInput.vue)
* [FieldElementSelect](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementSelect.vue)
* [FieldElementRadio](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementRadio.vue)
* [FieldElementCheckbox](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementCheckbox.vue)
* [FieldElementCheckboxList](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementCheckboxList.vue)
* [FieldElementDatePicker](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementDatePicker.vue)
* [FieldElementSwitch](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementSwitch.vue)
* [FieldElementTextArea](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementTextArea.vue)
* [FieldElementUpload](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementUpload.vue)
* [FieldElementColorPicker](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementColorPicker.vue)
* [FieldElementSlider](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/src/fields/FieldElementSlider.vue)

### Contribution
PR's are more than welcome!

<a href="https://github.com/InitAfricaHQ/vue-form-generator-element/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=InitAfricaHQ/vue-form-generator-element" />
</a>

### Tests
```
npm run test
```

## License

Vue Form Generator Element Plus is open source software licensed as
[MIT](https://github.com/InitAfricaHQ/vue-form-generator-element/blob/main/LICENSE).