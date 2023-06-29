<template>
  <div class="infobox">
    <InfoButton></InfoButton>
    <div class="infocontent">
      <img class="biglogo" :src="data[0].logo.asset.url" alt="">
      <div class="infocontainer">
        <!-- INTRO SECTION -->
        <div class="title">{{ data[0].name }}</div>
        <div class="intro">
          <div class="descriptiontext">
            {{ data[0].bio }}
          </div>
          <div class="quote">
            {{ data[0].quote }}
          </div>
        </div>
        <!-- CONTACT SECTION -->
        <div class="contact">
          <div v-for="  slot   in   data[0].contactinfo  " v-bind:key="slot.id">{{ slot }}</div>
        </div>
        <div class="separator"></div>
        <!-- EXHIBITIONS SECTION -->
        <div class="exhibitions">
          <!-- UPCOMING EXHIBITIONS SECTION -->
          <div class="upcomingexhibitions marbot">
            <div class="exhibitionstitle">UPCOMING EXHIBITIONS</div>
            <div class="expoinstances">
              <div class="expogrid marbot" v-for="  expo   in   data[0].upexpos  " v-bind:key="expo.id">
                <div>{{ expo.year }}</div>
                <div>{{ expo.place }}</div>
                <div>{{ expo.citycountry }}</div>
              </div>
            </div>
          </div>
          <!-- EXHIBITIONS SECTION -->
          <div class="currentexhibitions marbot">
            <div class="exhibitionstitle">EXHIBITIONS</div>
            <div class="expoinstances">
              <div class="expogrid marbot" v-for="  expo   in   data[0].expos  " v-bind:key="expo.id">
                <div>{{ expo.year }}</div>
                <div>{{ expo.place }}</div>
                <div>{{ expo.citycountry }}</div>
              </div>
            </div>
          </div>
          <!-- EDUCATION SECTION -->
          <div class="education marbot">
            <div class="exhibitionstitle">EDUCATION</div>
            <div class="expoinstances">
              <div class="expogrid marbot" v-for="  expo   in   data[0].education  " v-bind:key="expo.id">
                <div>{{ expo.year }}</div>
                <div>{{ expo.place }}</div>
                <div>{{ expo.citycountry }}</div>
              </div>
            </div>
          </div>
          <div class="colophon">Website designed and built by <a href="https://b4rt3k.xyz">Bartek Pierściński</a></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const query = groq`*[_type == "info"]{logo{asset->{url}},name,bio,quote,contactinfo[],expos[],upexpos[],education[]}`
const { data } = useSanityQuery(query)
console.log(data)
</script>

<style>
.marbot {
  margin-bottom: .5em;
}

.infobox {
  z-index: 500;
  position: absolute;
  opacity: 100;
  left: calc(100vw - (2 * var(--space) + 30px));
  width: 65vw;
  max-height: calc(var(--vh) * 100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  transition: .6s ease-in-out;
}

.active {
  /* left: 35vw !important; */
  transform: translate(-55vw);
  opacity: 100 !important;
}

.infocontent {
  display: inline-block;
  background-color: #ffffff;
  padding: var(--space);
}

.biglogo {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: var(--space);
}

.infocontainer {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: calc(var(--space) / 2);
}

.title {
  grid-column: 1 / 7;
}

.separator {
  height: 1em;
  grid-column: 1 / 7;
}

.intro {
  grid-column: 1 / 5;
  max-width: 45em;
}

.intro>div:not(:last-child) {
  margin-bottom: .5em;
}

.contact {
  grid-column: 5 / 7;
}

.exhibitions {
  grid-column: 1 / 7;
}

.exhibitionstitle {
  margin-bottom: .5em;
}

.expogrid {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: auto;
  grid-gap: calc(var(--space) / 2);
}

.descriptiontext {
  font-family: "CMU";
}

.quote {
  font-family: "CMUI";
}

.line {
  border-bottom: solid 1.5px black;
  height: var(--margin1);
  width: 100% !important;
}

.colophon {
  grid-column: 5 / 7;
  color: lightgrey !important;
}

.colophon a {
  color: lightgrey !important;
}



@media screen and (max-width: 820px) {
  .infobox {
    width: 100vw !important;
  }

  .education {
    margin-bottom: 13vh;
  }

  .active {
    left: 0 !important;
  }

  .infocontent {
    max-height: calc(100vh - 2*var(--space)) !important;
    overflow: scroll !important;
  }

  .infocontent::-webkit-scrollbar {
    display: none !important;
  }

  .intro {
    grid-column: 1 / 7;
  }

  .contact {
    grid-column: 1 / 7;
  }
}
</style>
