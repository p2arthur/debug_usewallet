<template>
  <div class="doc-container">
    <div class="title-page">Documents</div>
    <div class="div-doc">
      <div class="topics">
        <div v-for="(item, index) in documentation" :key="index" class="topic" @click="selectTopic(index)">
          {{ item.title }}
        </div>
      </div>
      <div class="content">
        <div v-html="selectedContent"></div>
        <div class="navigation-buttons">
          <button v-if="hasPrevious" @click="goToPrevious()">Back</button>
          <button v-if="hasNext" @click="goToNext()">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

const documentation = ref([
  {
    title: 'Introduction',
    content: `
    <h1 class="h1-custom">Introduction</h1> 
    <p class="p1-custom">rxelms is a virtual world that is being built on the Algorand blockchain using Unity. The team behind rxelms has been working on the project for the past 6 months and we’re getting closer to our first release</p> 
    <h1 class="h1-custom">Why is building a virtual world on Algorand a good idea?</h1>
    <p class="p1-custom">Virtual worlds are a great use case for blockchains as, in a way, they mimic real life and can be seen as a very small glimpse into a real-life world run on a blockchain. If done right, a metaverse built on Algorand could be a really good thing for our community. Here are some of the main reasons why:</p>
    <ul class="p1-custom">
      <li>Showcase Algorand’s technical capabilities - In-game transactions that have a 3s finality will make transacting inside rxelms super easy. Also, the development of in-game interactive assets that use the blockchain could be really interesting as there’ll be less limitations than other blockchains.</li>
      <li>A virtual world has the potential to create a thriving economy. Ownership is a massive part of virtual worlds, new economies will form. Things like the trading of avatar apparel, property, usernames, custom space designs, 3D assets/spaces decorations, etc.</li>
      <li>Bring in new people to our community - A massive part of this project will be about onboarding new users to the Algorand ecosystem.</li>
      <li>Add more utility to art-based NFTs minted on Algorand by providing a space for the Algorand community to show off their NFT collections in a 3D environment.</li>
      <li>A place to hold virtual events in-house instead of using non-Algorand based companies.</li>
    </ul>
  `
  },
  {
    title: 'rxelms',
    content: `
    <h1 class="h1-custom">The rxelms</h1> 
    <p class="p1-custom">We’re starting off with 36 rxelms, 8 of these rxlems have been assigned to projects, plus there’ll
be a centre rxelm which will be neutral ground. When the time comes we’ll open up more of the
remaining rxelms to other projects, this will be decided by community voting. Interoperability is
something in we’d like to explore, we’d like to reserve a selection of rxelms for the possibility of
bringing in NFT projects from some of the other chains in the future</p> 
<h1 class="h1-custom">Spaces</h1> 
    <p class="p1-custom">Spaces refers to the spaces assigned to buildings, owners of spaces will be able to create
custom designs. We want property owners to be able to customise their spaces with as little
restrictions as possible, there’ll be limitations on size, mb and polygons but apart from that the
only other limitation will be your imagination.</p> 
<p class="p1-custom">Each space is assigned to a property, a bit like how apartments work. The assignment of spaces
to buildings will be, for the most part never changed however in the future we’re going to explore
breakaway rxelms, this will mean some spaces may be assigned a new building in a new rxelm
but this will only happen if the space owner chooses. There’ll only ever be 99,999 spaces inside
rxelms.</p> 
<p class="p1-custom">People that own multiple spaces in the same building will eventually have the option to merge
their spaces, this will give the owner more freedom in terms of size and limitations.</p> 
<p class="p1-custom">We’ll also be providing ready made spaces for the rxelminian on the go.</p> 

  `
  },
  {
    title: 'Builder',
    content: `
    <h1 class="h1-custom">Builder</h1> 
    <p class="p1-custom">We’ll be providing a builder system, this is where customisation of spaces will take place, the
rxelms team will be constantly coming up with free content/assets to make the customisation
experience more in depth, there’ll also be an import function of external assets and also a section
for acquired assets. For the more advanced user you’ll be able to customise your spaces using
code, this can be handy if you’d like to add interactivity into your space.</p> 
    
  `
  },
  {
    title: 'Economy',
    content: `
      <h1 class="h1-custom">The Creator Economy</h1>
      <p class="p1-custom">This is something we’re really passionate about, we want to get as many creators as possible making things they can sell, use or giveaway for the rxelms community. We think this will happen naturally but we’ll also be using NIKO to incentivise this.</p>
      
      <h1 class="h1-custom">Participation Rewards</h1>
      <p class="p1-custom">A big part of rxelms is going to be community involvement, we’ll encourage this by using the token to reward participation through competitions and grants.</p>
      
      <h1 class="h1-custom">Marketplace</h1>
      <p class="p1-custom">The rxelms website houses a marketplace, initially this will only be used for the trading of spaces using the NIKO token. Eventually the marketplace will open up to include user created content.</p>
      
      <h1 class="h1-custom">Avatars</h1>
      <p class="p1-custom">We plan to release avatars once we have a basic avatar customisation system, eventually we hope to incorporate characters from NFT projects that align with ownership and their specific design.</p>
      
      <h1 class="h1-custom">UUBI</h1>
      <p class="p1-custom">All voting property owners will be given a wage. Unconditional Universal Basic Income is something we’re going to introduce very soon after the first sale of spaces, at first it will just be a case of holding the property in your wallet but eventually it will require owners to vote.</p>
      
      <h1 class="h1-custom">In-Game Advertising</h1>
      <p class="p1-custom">There’ll be many options for in-game advertising, initially starting with Algorand based organisations but then hopefully moving on to organisations outside of Algorand. Revenue made from advertising will go to the rxelm where the advert is, the more popular a rxelm the more likely a company will choose it. Organisations will be able to choose packages that start from basic to pro, basic may just be a billboard, pro could mean that the rxelms team will build an in-game accessible space that can also be interactive. Maybe you’d like a shop or an information hub for your business. rxelm leaders can choose to not allow advertising in their rxelm.</p>
    `
  },
  {
    title: 'Community Dynamics',
    content: `
      <h1 class="h1-custom">Community Hubs</h1>
      <p class="p1-custom">Each rxelm will have a designated area for events, the area will include a giant video screen. Residents of each rxelm will be able to book slots to use the events space, this could be great for presentations, DJ sets, podcasts, etc. There’ll also include the option for these spaces to be modified for special occasions or big events that may require a specific theme or layout. How the event area is managed may become something we delegate to the community and this could be different from rxelm to rxelm but our team will always be there to facilitate this.</p>
      
      <h1 class="h1-custom">Governance</h1>
      <p class="p1-custom">Eventually the world will be run by its inhabitants. There’ll be rxelm leaders that are voted in by their constituents, as most of the rxelms will be themed from specific NFT projects it would make sense that the creator of the NFT project will be voted in as the rxelm leader but we see no reason why this always has to be the case. rxelm leaders will be given a monthly budget (NIKO) to spend on the rxelm. We’re also exploring the idea of having building leaders, this may be useful for smaller issues relating to the building or surrounding area.</p>
      <p class="p1-custom">There’ll be no restrictions on how a realm leader has to spend their monthly budget however if spent poorly I’m sure their constituents will have something to say. Leader elections will be held, how often there’ll be held is something we’ll decide later with the input from the community.</p>
      
      <h1 class="h1-custom">The Counsel</h1>
      <p class="p1-custom">There’ll also be a counsel to ensure the integrity of the world and help direct it, this counsel will be built up over time and made up of community members that see the importance of doing this well. The counsel only have the power to form ideas to present to the community.</p>
      
      <h1 class="h1-custom">Voting</h1>
      <p class="p1-custom">Eventually, voting will become a massive part of directing the project, one day getting to a place where most decisions are made by the community. Voting will require locking up property and tokens.</p>
      <p class="p1-custom">We see the governance of rxelms as being a social experiment, it’ll be an evolving thing until we, the community, find something that works.</p>
    `
  },
  {
    title: 'Governance and Development',
    content: `
      <h1 class="h1-custom">Governance</h1>
      <p class="p1-custom">There’ll be no restrictions on how a realm leader has to spend their monthly budget however if spent poorly I’m sure their constituents will have something to say. Leader elections will be held, how often there’ll be held is something we’ll decide later with the input from the community.</p>
      
      <h1 class="h1-custom">The Counsel</h1>
      <p class="p1-custom">There’ll also be a counsel to ensure the integrity of the world and help direct it, this counsel will be built up over time and made up of community members that see the importance of doing this well. The counsel only have the power to form ideas to present to the community.</p>
      
      <h1 class="h1-custom">Voting</h1>
      <p class="p1-custom">Eventually, voting will become a massive part of directing the project, one day getting to a place where most decisions are made by the community. Voting will require locking up property and tokens. We see the governance of rxelms as being a social experiment, it’ll be an evolving thing until we, the community, find something that works.</p>

      <h1 class="h1-custom">Building the rxelms</h1>
      <p class="p1-custom">The rxelms team will be producing the content for the world while working closely with each project leader and their community. There’ll also be lots of opportunities for community members to get involved in the building of the world. All rxelms will evolve over time, they’ll all be ongoing projects as the rxelms team facilitates the wishes of each community.</p>
      
      <h1 class="h1-custom">Breakaway rxelms</h1>
      <p class="p1-custom">Breakaway rxelms are when enough residents group together to start a new rxelm, this will not effect the total number of rooms as that will always stay the same. Breakaway rxelms allow for the evolution of the project but this would be a few years away before we think the concept will be needed.</p>

      <h1 class="h1-custom">Systems Overview</h1>
      <p class="p1-custom">The world will run on the Algorand blockchain and is being developed using Unity. The builder/spaces system will be separate to the world system however they will be connected via a loading screen...</p>
      
      <h1 class="h1-custom">Opensource and NFDs</h1>
      <p class="p1-custom">Where possible we plan to open source. For player profiles, we plan to incorporate NFDs as the base of each player profile.</p>
    `
  },
  {
    title: 'Project Details',
    content: `
      <h1 class="h1-custom">The Token</h1>
      <p class="p1-custom">NIKO is the in-game currency for rxelms, Dartroom will be the guardian of the token, 100% of the token will be given away, Dartroom will never sell the token. The token can be used for in-game transactions, voting, and using the rxelms marketplace. We will also use the token for participation rewards, this includes rewarding participation from NFT projects. rxelms founders are able to take part in airdrops as long as they’re applicable...</p>
      
      <h1 class="h1-custom">Real Life Politics</h1>
      <p class="p1-custom">rxelms does not have a political view, all neutral areas like the centre rxelm will stay well clear of anything political... From now on, rxelms will be mindful to make sure we’re apolitical, this includes future social media posts. A further note regarding the Node Keeper universe, their political view is simply pro-decentralisation, this is really as far as they will go and ultimately the ‘World Peace Federation’ is fictional.</p>
      
      <h1 class="h1-custom">Runway</h1>
      <p class="p1-custom">If we do not sell any of the spaces we’re still going to build this, we’re 6 months in already and we have around a 3 years runway left. However, we’d very much like to extend that to 10+ years and also have the ability to hire more staff.</p>

      <h1 class="h1-custom">Message to the Community</h1>
      <p class="p1-custom">Building a virtual world is a massive undertaking, we’d be lying if we said we weren’t nervous with the bigness of the task in hand, however that nervousness is coupled with excitement. Not one of our team members feels like they’re working due to how fun this project is and we hope that our passion will shine through in everything we produce...</p>
    `
  },
  {
    title: 'Project Roadmap',
    content: `
      <h1 class="h1-custom">Roadmap</h1>
      <p class="p1-custom">We want to keep the roadmap realistic and open to change so we’re not going to be too specific. </p>
        <p class="p1-custom">H1 2024 - The release of a very basic builder/spaces system along with an NFT framing system, the builder/spaces system will be in ongoing development for the foreseeable future.</p>
      <p class="p1-custom">h1 2024 - We release the first rxelms.</p>
      <p class="p1-custom">2035 - rxelms is as decentralised and autonomous as possible depending on the technology available at the time.</p>
      <p class="p1-custom">The speed of development will depend on the amount of spaces we’ve sold, during the first year we also plan to work on avatars, in-game chat, multiple servers, interactive assets to name but a few.</p>
    `
  }


  // Adicione mais tópicos conforme necessário
]);

const currentPageIndex = ref(0);
const selectedContent = ref(documentation.value[0].content);

const hasPrevious = computed(() => currentPageIndex.value > 0);
const hasNext = computed(() => currentPageIndex.value < documentation.value.length - 1);

const goToPrevious = () => {
  if (currentPageIndex.value > 0) {
    currentPageIndex.value--;
    selectedContent.value = documentation.value[currentPageIndex.value].content;
  }
};

const goToNext = () => {
  if (currentPageIndex.value < documentation.value.length - 1) {
    currentPageIndex.value++;
    selectedContent.value = documentation.value[currentPageIndex.value].content;
  }
};

const selectTopic = (index) => {
  currentPageIndex.value = index;
  selectedContent.value = documentation.value[index].content;
};
</script>
  
<style lang="scss" scoped>
@font-face {
  font-family: 'Helvetica Neue 700';
  src: url('/fonts/helvetica-neue/700.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Helvetica Neue';
  src: url('/fonts/helvetica-neue/400.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}


body {
  font-family: 'Helvetica Neue', sans-serif;
  color: #000000;
  /* Define a cor do texto para preto */
}

.title-page {
  align-content: center;
  font-size: 60px;
  display: flex;
  justify-content: center;
  font-family: 'Helvetica Neue 700';
  color: #646464;
  padding-top: 100px;
  gap: -200px;

}

.doc-container {
  margin-left: 30px;
  align-content: center;

}

.global-h1-custom {
  color: #1b1b1b;
  font-size: 24px;
}

::v-deep .h1-custom {
  color: #1b1b1b;
  /* Exemplo de cor */
}

::v-deep .p1-custom {
  color: #1b1b1b;
  /* Exemplo de cor */
}


.div-doc {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;

  margin: 40px;
  /* Adiciona margem de 40 pixels */
  gap: 40px;

}


.topics {
  width: 10%;
  border-right: 1px solid #ccc;
  align-self: flex-start;



  max-height: auto;
  border-radius: 20px;
  background-color: #ffffff;


  font-family: 'Helvetica Neue', sans-serif;

  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #1b1b1b;
  min-height: 600px;





}


.content {
  width: 60%;
  padding-left: 20px;
  background-color: #ffffff;
  min-height: 700px;
  border-radius: 20px;
  max-height: 700px;
  /* Define uma altura máxima para o conteúdo */
  overflow-y: auto;
  display: flex;
  flex-direction: column;



  font-family: 'Helvetica Neue', sans-serif;

  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 30px;

}

.navigation-buttons {
  height: auto;

  display: flex;
  justify-content: space-between;
  margin-top: auto; 
  /* Espaçamento acima dos botões */
}

.navigation-buttons button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;

  /* Cor de fundo dos botões */
  color: rgb(53, 53, 53);
  /* Cor do texto */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  /* Efeito de transição ao passar o mouse */
}

.navigation-buttons button:hover {

  /* Cor de fundo ao passar o mouse */
}

.navigation-buttons button:disabled {

  cursor: not-allowed;
}

.topic {
  cursor: pointer;
  padding: 10px;

  &:hover {

  }
}</style>
  