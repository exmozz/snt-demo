<template>
    <div>
        <v-container fluid grid-list-lg>
            <h2 class="headline">Your groups</h2>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg4 xl4 v-for="group in groups" :key="group.id" class="group-item">
                    <group-card :card="group" />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import GroupCard from "../components/groups/GroupCard";
export default {
  components: {GroupCard},
  data() {
    return {
      groups: [
        {
          id: 1,
          giver: 'account1',
          receiver: 'account2',
          group: '100k',
          posts: 5,
          likes: 20,
          img: 'https://unsplash.it/150/300?image=52',
          status: 'on',
          payment: 'paid',
        },
        {
          id: 2,
          giver: 'account2',
          receiver: 'account1',
          group: '20k',
          posts: 5,
          likes: 100,
          img: 'https://unsplash.it/150/300?image=521',
          status: 'on',
          payment: 'paid',
        },
        {
          id: 3,
          giver: 'account3',
          receiver: 'account4',
          group: '30k',
          posts: 5,
          likes: 40,
          img: 'https://unsplash.it/150/300?image=645',
          status: 'on',
          payment: 'free',
        },
        {
          id: 4,
          giver: 'account3',
          receiver: 'account1',
          group: '30k',
          posts: 5,
          likes: 80,
          img: 'https://unsplash.it/150/300?image=784',
          status: 'off',
          payment: 'paid',
        }
      ]
    }
  }
}
</script>

<style>
.group-item {
    margin-top: 24px;
}
</style>