<template>
  <section class="w-1/2">
    <p>{{ t("title") }}</p>
    <h2 class="text-3xl font-medium">{{ t("lead") }}</h2>
    <p class="text-lg">{{ t("text") }}</p>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "title": "About this program",
    "lead": "Through this incubation program, develop Web3 projects which leverage the knowledge and resources of Sony Network Communications and Astar",
    "text": "This incubation program is a joint program between Sony Network Communications and Astar, and aims to foster cutting-edge Web3 use cases using the knowledge and resources of SONY and Astar. The program is online and open to participants worldwide and runs for three months, from March to June."
  },
  "ja": {
    "title": "このプログラムについて",
    "lead": "このインキュベーションプログラムを通じて、ソニーネットワークコミュニケーションズとアスターネットワークの知識とリソースを活用したWeb3プロジェクトを開発します",
    "text": "このインキュベーションプログラムは、ソニーネットワークコミュニケーションズとAstar Networkの共同プログラムであり、ソニーとAstar Networkの知識とリソースを用いて、最先端のWeb3ユースケースを育成することを目的としています。プログラムはオンラインで全世界から参加でき、期間は3月から6月までの3ヶ月間です。"
  }
}
</i18n>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>
