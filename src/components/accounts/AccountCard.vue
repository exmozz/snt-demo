<template>
    <div>
        <v-card>
            <v-img class="white--text"
                   height="200px"
                   :src="card.img">
            </v-img>
            <!--<v-card-title style="position: relative;">
                <v-btn v-if="card.status == 'done'" fab dark absolute top right color="green">
                    <v-icon dark>done</v-icon>
                </v-btn>
                <v-btn v-else-if="card.status == 'warning'" fab dark absolute top right color="orange">
                    <v-icon dark>warning</v-icon>
                </v-btn>
              <div>
              </div>
            </v-card-title>-->
            <v-card-text>
                <div class="text-xs-center">
                    <v-tooltip top v-if="card.status == 'done'">
                        <v-badge right slot="activator" color="green">
                            <v-icon slot="badge">done</v-icon>
                            <span class="title text-lowercase account-title">{{ card.name }}</span>
                        </v-badge>
                        <span>Your account is ready to use!</span>
                    </v-tooltip>
                    <v-tooltip top v-else-if="card.status == 'warning'">
                        <v-badge right slot="activator" color="orange">
                            <v-icon slot="badge">warning</v-icon>
                            <span class="title text-lowercase account-title">{{ card.name }}</span>
                        </v-badge>
                        <span>Your account requires validation!</span>
                    </v-tooltip>
                </div>
                <v-layout row wrap style="margin-top: 48px;">
                    <v-flex xs4>
                        <p class="caption text-xs-center">Posts</p>
                        <p class="body-1 text-xs-center font-weight-medium">{{ card.posts }}</p>
                    </v-flex>
                    <v-flex xs4>
                        <p class="caption text-xs-center">Followers</p>
                        <p class="body-1 text-xs-center font-weight-medium">{{ card.followers }}</p>
                    </v-flex>
                    <v-flex xs4>
                        <p class="caption text-xs-center">Following</p>
                        <p class="body-1 text-xs-center font-weight-medium">{{ card.following }}</p>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-btn outline color="blue" block @click="accountEditForm=true">Edit</v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog v-model="accountEditForm"
                  width="500">
            <account-edit-form :username="card.name" />
        </v-dialog>

    </div>
</template>

<script>
  import AccountEditForm from "./AccountEditForm";
  export default {
    name: 'account-card',
    components: {AccountEditForm},
    data() {
      return {
        accountEditForm: false,
      }
    },
    props: ['card',]
  }
</script>

<style lang="scss">
    .account-title {
        position: relative;
    }

    .account-title:after {
        content: "";
        position: absolute;
        left: calc(50% - 18px);
        bottom: -15px;
        width: 36px;
        height: 4px;
        background: #374785;
    }
</style>