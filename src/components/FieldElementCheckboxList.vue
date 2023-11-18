<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-checkbox-group :id="schema.id" v-model="value">
      <el-checkbox
        border
        size="medium"
        v-bind:index="index"
        v-bind:key="item.label"
        v-for="(item, index) in items"
        :label="item.name"
        :disabled="schema.disabled"
        :autocomplete="schema.autocomplete"
        :name="schema.inputName"
      >
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
import abstractField from "@/fields/abstract";
import defaultValueSetter from "@/fields/default";
import { ElCheckbox, ElCheckboxGroup, ElFormItem } from 'element-plus';

export default {
  name: "FieldElementCheckboxList",

  components: {
    ElFormItem,
    ElCheckbox,
    ElCheckboxGroup,
  },

  mixins: [abstractField, defaultValueSetter],

  created() {
    this.value = [];
  },

  computed: {
    items() {
      const values = this.schema.values;
      if (typeof values === "function") {
        return values.apply(this, [this.model, this.schema]);
      }
      return values;
    },
  },
};
</script>
