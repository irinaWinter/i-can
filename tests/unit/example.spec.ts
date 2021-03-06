import { shallowMount } from "@vue/test-utils";
import IcvRegister from "@/components/Register.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(IcvRegister, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
