import { onMount } from "solid-js";
// @ts-ignore
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import RustCheat from "/src/pages/home/cheats/rust/Rust";
import CppCheat from "/src/pages/home/cheats/cpp/Cpp";
import GoCheat from "/src/pages/home/cheats/go/Go";

export default function Home() {
  let ref: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined;

  onMount(() => {
    new Swiper(ref, {
      // Optional parameters
      direction: "horizontal",
      hashNavigation: {
        watchState: true,
      },
      keyboard: {
        enabled: true,
      },
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  });

  return (
    <div>
      <div ref={ref} class="swiper">
        <div class="swiper-wrapper">
          <div data-hash="rust" class="swiper-slide">
            <RustCheat />
          </div>
          <div data-hash="cpp" class="swiper-slide">
            <CppCheat />
          </div>
          <div data-hash="go" class="swiper-slide">
            <GoCheat />
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
}
