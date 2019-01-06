<template>
    <div>
        <v-container fluid grid-list-lg>
            <h2 class="headline">Your accounts</h2>
            <v-layout row wrap align-start justify-start>
                <v-flex xs12 sm6 md4 lg4 xl4 v-for="item in accounts" :key="item.id" class="account-item">
                    <account-card :card="item"/>
                </v-flex>
            </v-layout>
        </v-container>
        <v-btn fab dark fixed bottom right color="blue" @click="accountCreateForm=true">
            <v-icon dark>add</v-icon>
        </v-btn>

        <v-dialog v-model="accountCreateForm" width="500">
            <account-edit-form username="" />
        </v-dialog>

    </div>
</template>

<script>

  import AccountCard from "../components/accounts/AccountCard";
  import AccountEditForm from "../components/accounts/AccountEditForm";

  export default {
    components: {AccountEditForm, AccountCard},
    data() {
      return {
        accounts: [
          {
            id: 1,
            img: 'https://unsplash.it/150/300?image=123',
            name: 'Account1',
            status: 'done',
            posts: 2,
            followers: 20,
            following: 10,
          },
          {
            id: 2,
            img: 'https://unsplash.it/150/300?image=231',
            name: 'Account2',
            status: 'done',
            posts: 2,
            followers: 20,
            following: 10,
          },
          {
            id: 3,
            img: 'https://unsplash.it/150/300?image=423',
            name: 'Account3',
            status: 'warning',
            posts: 2,
            followers: 20,
            following: 10,
          },
          {
            id: 4,
            img: 'https://unsplash.it/150/300?image=324',
            name: 'Account4',
            status: 'done',
            posts: 2,
            followers: 20,
            following: 10,
          },
        ],
        accountCreateForm: false,
      }
    }
  }
</script>

<style>
.account-item {
    margin-top: 24px;
}
</style>