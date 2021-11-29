<template>
  <div>
    <span>基本用法：</span>
    <Select v-model="model1" style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">
        {{ item.label }}
      </Option>
    </Select>
    <br /><br />
    <span>可以清空：</span>
    <Select v-model="model1" clearable style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>
    <br /><br />
    <span>前缀图标 ：</span>
    <Select v-model="model1" prefix="ios-home" style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>
    <br /><br />
    <!-- 创建条目 -->
    <template>
      <Row>
        <Col span="12" style="padding-right:10px">
          <Select
            v-model="model17"
            filterable
            allow-create
            @on-create="handleCreate1"
          >
            <Option
              v-for="item in cityList3"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </Col>
        <Col span="12">
          <Select
            v-model="model18"
            filterable
            multiple
            allow-create
            @on-create="handleCreate2"
          >
            <Option
              v-for="item in cityList4"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </Col>
      </Row>
    </template>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      cityList3: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        }
      ],
      cityList4: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        }
      ],
      model17: "",
      model18: [],
      model1: ""
    };
  },
  methods: {
    handleCreate1(val) {
      this.cityList3.push({
        value: val,
        label: val
      });
    },
    handleCreate2(val) {
      this.cityList4.push({
        value: val,
        label: val
      });
    }
  }
};
</script>
