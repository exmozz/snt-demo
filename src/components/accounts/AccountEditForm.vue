<template>
    <div>
        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="username"
                        label="Username"
                        outline
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        outline
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="secure_code"
                        label="Secure code"
                        outline>
                    </v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn outline block color="blue" v-if="username!=''">
                    Edit
                </v-btn>
                <v-btn outline block color="blue" v-else>
                    Add
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'account-edit-form',
  data() {
    return {
      password: '',
      secure_code: '',
    }
  },
  props: ['username',]
}
</script>