<template>
    <div>
        <v-card>
            <v-card-text>
                <v-tabs
                    v-model="active">
                    <v-tab :key="0">
                        Accounts
                    </v-tab>
                    <v-tab-item :key="0" style="padding: 24px 12px;">
                        <v-form>
                            <v-text-field
                                v-model="group.giver"
                                label="Account to give likes"
                                outline
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="group.receiver"
                                label="Account to get likes"
                                outline
                                required>
                            </v-text-field>
                        </v-form>
                    </v-tab-item>
                    <v-tab :key="1">
                        Groups
                    </v-tab>
                    <v-tab-item :key="1" style="padding: 24px 12px;">
                        Select the group
                        <div class="text-xs-center">
                            <v-chip>Bloggers</v-chip>
                            <v-chip>100k</v-chip>
                            <v-chip>Travels</v-chip>
                        </div>
                    </v-tab-item>
                    <v-tab :key="2" style="padding: 24px 12px;">
                        Settings
                    </v-tab>
                    <v-tab-item :key="2">
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-subheader>How many likes per post</v-subheader>
                                <v-slider
                                    v-model="group.likes"
                                    min="1"
                                    max="100"
                                    thumb-label="always">
                                </v-slider>
                            </v-flex>
                            <v-flex xs12>
                                <v-subheader>How many post per day</v-subheader>
                                <v-slider
                                    v-model="group.posts"
                                    min="1"
                                    max="100"
                                    thumb-label="always">
                                </v-slider>
                            </v-flex>
                        </v-layout>
                    </v-tab-item>
                </v-tabs>
            </v-card-text>
            <v-card-actions>
                <v-btn outline block color="blue">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'group-edit-form',
  data() {
    return {
      giver: '',
      receiver: '',
      active: 0,
    }
  },
  props: ['group',]
}
</script>