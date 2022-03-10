import { createSignal, onMount } from "solid-js";
// @ts-ignore
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function CppCheat() {
  const [count, setCount] = createSignal(0);
  let ref: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined;

  onMount(() => {
    new Swiper(ref, {
      // Optional parameters
      direction: "vertical",
      loop: true,
      keyboard: {
        enabled: true,
      },
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
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="c" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="cpp" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="julia" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="swift" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="golang" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="csharp" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="python" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
          <div data-hash="js" class="swiper-slide">
            <section class="card">
              <h1 class="text-2xl font-bold">Home</h1>
              <p class="mt-4">This is the home page.</p>

              <div class="flex items-center space-x-2">
                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() - 1)}
                >
                  -
                </button>
                <div class="i-mdi-alarm text-orange-400" />
                <output class="p-10px">{count}</output>

                <button
                  class="border rounded-lg px-2 border-gray-900"
                  onClick={() => setCount(count() + 1)}
                >
                  +ddddsddsd士大夫速度发士大夫十分士大夫
                </button>
              </div>
            </section>
          </div>
        </div>

        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  );
}
