import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should render a Vue instance", () => {
    const wrapper = shallowMount(App);
    expect.assertions(1);
    expect(wrapper.findComponent(App).exists()).toBe(true);
  });
});
