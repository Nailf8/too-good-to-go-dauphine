import React from "react";

const Landing = () => {
  return (
    <div className="text-gray-700 bg-white antialiased">
      <div
        className="py-20 bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-6xl font-bold mb-4 text-white">
            <span className="text-gray-800">SAVE</span>{" "}
            <span className="text-orange-500">MEALS</span> FROM FOOD WASTE
          </h2>
          <a href="/menu" class="underline">
            <button class="bg-white font-bold mt-4 rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">
              ORDER NOW!
            </button>
          </a>
        </div>
      </div>

      <section class="container mx-auto px-6 p-10">
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2 pr-10">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">
              Discover the future of student food
            </h4>
            <p class="text-gray-600 mb-8">
              Explore a new way of eating as a student. Enjoy delicious meals at
              advantageous prices while reducing food waste. With
              ToogoodDauphine, eat better, save more.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img
              class="rounded-lg"
              src="https://www.box-az.com/wp-content/uploads/2022/08/Box-panier-repas-1.jpg"
              alt="Discover the future of student food"
            />
          </div>
        </div>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <img
              class="rounded-lg"
              src="https://www.la-main-a-la-pate.fr/wp-content/uploads/2023/07/shutterstock_2108460314-1-930x620.jpg"
              alt="A reinvented student culinary experience"
            />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">
              A reinvented student culinary experience
            </h4>
            <p class="text-gray-600 mb-8">
              Dive into a world of varied flavors and delicious dishes. From
              energizing breakfasts to comforting dinners, ToogoodDauphine
              offers you an unparalleled culinary experience, specially designed
              for Dauphine students.
            </p>
          </div>
        </div>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2 pr-10">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">
              Change your eating habits, change the world
            </h4>
            <p class="text-gray-600 mb-8">
              Join the movement for more sustainable and economical eating. With
              ToogoodDauphine, every meal is a small victory against food waste.
              Be part of the change today.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img
              class="rounded-lg"
              src="https://www.choisirunebox.com/wp-content/uploads/2020/09/panier-quitoque.jpg"
              alt="Syncing"
            />
          </div>
        </div>
      </section>

      <section class="bg-gray-100">
        <div class="container mx-auto px-6 py-20">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
            Reviews
          </h2>
          <div class="flex flex-wrap">
            <div class="w-full h-auto md:w-1/3 px-2 mb-4">
              <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">
                  ToogoodDauphine is a godsend for budget-conscious students and
                  those concerned with fighting food waste. Thanks to this app,
                  I have been able to discover delicious meals at very
                  advantageous prices, all while contributing to reducing waste.
                  It's a brilliant initiative that deserves support!
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">
                  Omar Ajraoui
                </p>
              </div>
            </div>

            <div class="w-full h-auto md:w-1/3 px-2 mb-4">
              <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">
                  I've been using ToogoodDauphine for a few weeks now and I'm
                  impressed by the variety of offers available. Whether it's for
                  a quick lunch between classes or dinner after a long day of
                  study, the app always offers enticing options at unbeatable
                  prices. It's become a must-have in my student life!
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Younes Naji</p>
              </div>
            </div>

            <div class="w-full h-auto md:w-1/3 px-2 mb-4">
              <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">
                  ToogoodDauphine has revolutionized my consumption habits as a
                  student. Not only do I save money on my daily meals, but I
                  also feel better knowing that I am contributing to reducing
                  food waste. The app is user-friendly and intuitive, making it
                  even more enjoyable to use. I highly recommend it to all
                  Dauphine students!
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Adel Tiar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
