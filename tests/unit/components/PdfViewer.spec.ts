import { shallowMount } from "@vue/test-utils";
import PdfViewer from "@/components/PdfViewer.vue";

describe('PdfViewer', () => {
    it("should render a Vue instance", () => {
        const wrapper = shallowMount(PdfViewer, {
            props: {
                pdf: ''
            }
        });
        expect.assertions(1);
        expect(wrapper.findComponent(PdfViewer).exists()).toBe(true);
    });
});
