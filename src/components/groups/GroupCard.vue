<template>
    <div>
        <v-card>
            <v-img class="white--text"
                   height="200px"
                   :src="card.img">
            </v-img>
            <v-card-title style="position: relative;">
                <v-btn v-if="card.payment == 'paid'" fab dark absolute top right color="cyan">
                    <span>Paid</span>
                </v-btn>
                <v-btn v-else-if="card.payment == 'free'" fab dark absolute top right color="blue">
                    <span>Free</span>
                </v-btn>
              <div>
              </div>
            </v-card-title>
            <v-card-text>
                <div class="text-xs-center">
                    <v-tooltip top v-if="card.status == 'on'">
                        <v-badge right slot="activator" color="green">
                            <v-icon slot="badge" dark>done</v-icon>
                            <span class="title text-lowercase group-title">{{ card.giver }}</span>
                        </v-badge>
                        <span>It's on</span>
                    </v-tooltip>
                    <v-tooltip top v-else-if="card.status == 'off'">
                        <v-badge right slot="activator" color="red">
                            <v-icon slot="badge" dark>cancel</v-icon>
                            <span class="title text-lowercase group-title">{{ card.giver }}</span>
                        </v-badge>
                        <span>It's off</span>
                    </v-tooltip>
                </div>
                <v-layout row wrap style="margin-top: 48px;">
                    <v-flex xs6>
                        <p class="caption text-xs-center">Receiver</p>
                        <p class="body-1 text-xs-center font-weight-medium">{{ card.receiver }}</p>
                    </v-flex>
                    <v-flex xs6>
                        <p class="caption text-xs-center">Group</p>
                        <p class="body-1 text-xs-center font-weight-medium">{{ card.group }}</p>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs6>
                        <p class="caption text-xs-center">Posts/day</p>
                        <p class="body-1 text-xs-center font-weight-medium">{{ card.posts }}</p>
                    </v-flex>
                    <v-flex xs6>
                        <p class="caption text-xs-center">Likes/post</p>
                        <p class="body-1 text-xs-center font-weight-medium">{{ card.likes }}</p>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-btn outline color="blue" block @click="groupEditForm=true">Edit</v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog v-model="groupEditForm"
                  width="500">
            <group-edit-form :group="card" />
        </v-dialog>

    </div>
</template>

<script>

  import GroupEditForm from "./GroupEditForm";
  export default {
    name: 'group-card',
    components: {GroupEditForm},
    data() {
      return {
        groupEditForm: false,
      }
    },
    props: ['card',]
  }
</script>

<style lang="scss">
    .group-title {
        position: relative;
    }

    .group-title:after {
        content: "";
        position: absolute;
        left: calc(50% - 18px);
        bottom: -15px;
        width: 36px;
        height: 4px;
        background: #374785;
    }
</style>