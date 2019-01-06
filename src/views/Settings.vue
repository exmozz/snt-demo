<template>
    <div>
        <v-container fluid grid-list-md>
            <v-layout>
                <v-flex xs12>
                    <v-card>
                        <v-card-text>
                            <v-form>
                                <h2 class="headline text-xs-center" style="margin-bottom: 24px;">User settings</h2>
                                <v-text-field
                                    v-model="name"
                                    label="Name"
                                    outline>
                                </v-text-field>
                                <v-text-field
                                    v-model="email"
                                    label="Email"
                                    outline>
                                </v-text-field>
                                <h2 class="headline text-xs-center" style="margin-bottom: 24px;">Change password</h2>
                                <v-text-field
                                    v-model="password"
                                    label="Current password"
                                    outline>
                                </v-text-field>
                                <v-text-field
                                    v-model="new_password"
                                    label="New password"
                                    outline>
                                </v-text-field>
                                <v-text-field
                                    v-model="confirm_password"
                                    label="Confirm new password"
                                    outline>
                                </v-text-field>

                            </v-form>

                        </v-card-text>
                        <v-card-actions>
                            <v-btn block outline color="blue">Save</v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card style="margin-top: 24px;">
                        <v-card-text>
                            <h2 class="headline text-xs-center">Delete account</h2>
                            <p>
                                This action will delete account
                            </p>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn outline block color="red">Delete</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      new_password: '',
      confirm_password: '',
    }
  }
}
</script>