<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-8 sm:mb-16"><span>Connect with Us</span></h2>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
      <li v-bind:key="index" v-for="(item, index) in social">
        <a
          :href="item.href"
          target="_blank"
          rel="noopener"
          class="bg-space-gray block rounded-3xl text-center py-6 sm:py-8 px-2 sm:px-4 hover:bg-space-gray-lighter transition"
          data-aos="flip-left"
          :data-aos-delay="index * 100"
        >
          <component
            :is="item.icon"
            class="h-10 sm:h-12 w-10 sm:w-12 mx-auto my-2 sm:my-4"
            :class="item.color"
            aria-hidden="true"
          />
          <span
            class="font-mono text-xs border border-gray-500 rounded-lg py-1 px-3"
          >
            {{ item.type }}
          </span>
          <h3 class="font-medium text-xl mt-1 sm:mt-2">{{ item.name }}</h3>
          <div class="stats leading-snug">
            <span v-if="item.name === 'YouTube'" class="font-bold text-xl mr-1.5">
              {{ youtuberSubscribers }}
            </span>
            <span v-else-if="item.name === 'GitHub'" class="font-bold text-xl mr-1.5">
              {{ githubStars }}
            </span>
            <span v-else-if="item.name === 'Telegram'" class="font-bold text-xl mr-1.5">
              {{ telegramFollows }}
            </span>
            <span v-else-if="item.name === 'Discord'" class="font-bold text-xl mr-1.5">
              {{ discordMembers }}
            </span>
            <span v-else-if="item.name === 'Medium'" class="font-bold text-xl mr-1.5">
              {{ mediumFollowers }}
            </span>
            <span v-else class="font-bold text-xl mr-1.5">
              {{ item.stats }}
            </span>
            <small class="block">{{ item.unit }}</small>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import axios from 'axios';
import { defineComponent, ref, watchEffect } from 'vue';
const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Medium = resolveComponent("IconMedium");
const Github = resolveComponent("IconGithub");
const Youtube = resolveComponent("IconYoutube");
const Comments = resolveComponent("IconComments");

const YOUTUBER_API_KEY = 'AIzaSyBe7tcEaLUPsvQDr-jkV7X3cZ5nPGGeQIQ';
const YOUTUBE_CHANNEL_ID = 'UC36JgEF6gqatVSK9xlzzrvQ';

export default defineComponent({
  setup() {
    const social = [
      {
        name: "Twitter",
        href: "https://twitter.com/astarNetwork",
        icon: Twitter,
        stats: "+355K",
        unit: "followers",
        type: "Announcements",
        color: "text-[#1DA1F2]",
      },
      {
        name: "Discord",
        href: "https://discord.gg/Z3nC9U4",
        icon: Discord,
        stats: "+160K",
        unit: "members",
        type: "Engineering",
        color: "text-[#5865F2]",
      },
      {
        name: "Telegram",
        href: "https://t.me/PlasmOfficial",
        icon: Telegram,
        stats: "+28K",
        unit: "members",
        type: "Announcements",
        color: "text-[#0088CC]",
      },
      {
        name: "Medium",
        href: "https://medium.com/astar-network",
        icon: Medium,
        stats: "+7,0K",
        unit: "followers",
        type: "Announcements",
        color: "text-gray-200",
      },
      {
        name: "GitHub",
        href: "https://github.com/AstarNetwork/Astar",
        icon: Github,
        stats: "+580",
        unit: "stars",
        type: "Engineering",
        color: "text-[#FAFAFA]",
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/c/AstarNetwork",
        icon: Youtube,
        stats: "+2,7K",
        unit: "subscribes",
        type: "Announcements",
        color: "text-[#e64747]",
      },
      {
        name: "Forum",
        href: "https://forum.astar.network/",
        icon: Comments,
        stats: "+170",
        unit: "topics",
        type: "Announcements",
        color: "text-gray-200",
      },
    ];

    const youtuberSubscribers = ref<string>('+2.7K');
    const githubStars = ref<string>('+580');
    const telegramFollows = ref<string>('+28K');
    const discordMembers = ref<string>('+160K');
    const mediumFollowers = ref<string>('+7.0K');

    var unitlist = ["","K","M","G"];
    const formatnumber = (number: number): string => {
      let sign = Math.sign(number);
      let unit = 0;

      while(Math.abs(number) > 1000) {
        unit = unit + 1;
        number = Math.floor(Math.abs(number) / 100)/10;
      }

      return `+${sign * Math.abs(number)}${unitlist[unit]}`.replace('.', ',');
    };


    const getYoutubeSubs = async (): Promise<void> => {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&fields=items/statistics/subscriberCount&key=${YOUTUBER_API_KEY}`;
      const result = await axios.get<any>(url);

      if (result?.data?.items[0]?.statistics?.subscriberCount) {
        console.log('Youtube subs', result.data.items[0].statistics.subscriberCount);

        try {
          youtuberSubscribers.value = formatnumber(result.data.items[0].statistics.subscriberCount);
        } catch (error) {
          console.error(error);
        } finally {
          // noop
        }
      }
    };

    const getGithubStars = async (): Promise<void> => {
      const url = `https://api.github.com/repos/AstarNetwork/Astar`;
      const result = await axios.get<any>(url);

      if (result?.data?.stargazers_count) {
        console.log('Github stars', result.data.stargazers_count);

        try {
          githubStars.value = formatnumber(result?.data?.stargazers_count);
        } catch (error) {
          console.error(error);
        } finally {
          // noop
        }
      }
    }

    const getTelegramFollows = async (): Promise<void> => {
      const url = `https://api.telegram.org/bot5867933754:AAHL8H3AAzv3emATFJc780hLV5YljFHLyc4/getChatMembersCount?chat_id=@PlasmOfficial`;
      const result = await axios.get<any>(url);

      if (result?.data?.result) {
        console.log('Telegram follows', result.data.result);

        try {
          telegramFollows.value = formatnumber(result.data.result);
        } catch (error) {
          console.error(error);
        } finally {
          // noop
        }
      }
    }

    const getDiscordMembers = async (): Promise<void> => {
      const url = `https://discord.com/api/v9/invites/Z3nC9U4?with_counts=true&with_expiration=true`;
      const result = await axios.get<any>(url);

      if (result?.data?.approximate_member_count) {
        console.log('Discord members', result.data.approximate_member_count);

        try {
          discordMembers.value = formatnumber(result.data.approximate_member_count);
        } catch (error) {
          console.error(error);
        } finally {
          // noop
        }
      }
    }

    const getMediumFollow = async (): Promise<void> => {
      const url = `https://us-central1-astar-home.cloudfunctions.net/mediumFollowerCount`;
      const result = await axios.get<any>(url);

      if (result?.data?.followers) {
        console.log('Medium Followers', result.data.followers);

        try {
          mediumFollowers.value = formatnumber(result.data.followers);
        } catch (error) {
          console.error(error);
        } finally {
          // noop
        }
      }
    }


    watchEffect(async () => {
      try {
        await Promise.all([
          getGithubStars(),
          getYoutubeSubs(),
          getTelegramFollows(),
          getDiscordMembers(),
          getMediumFollow()
        ]);
      } catch (error) {
        console.error(error);
      }
    });

    return {
      githubStars,
      youtuberSubscribers,
      telegramFollows,
      discordMembers,
      mediumFollowers,
      social
    };
  },
});
</script>

<style scoped lang="postcss">
.stats span {
  background: linear-gradient(
    90deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
