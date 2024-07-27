<template>
  <UForm :state="state" :schema="schema">
    <UFormGroup label="Full Name" name="name" class="mb-4">
      <UInput placeholder="Name" v-model="state.name" />
    </UFormGroup>

    <UFormGroup
      label="Email"
      name="email"
      class="mb-4"
      help="You will receive a confirmation email on both the old and the new addresses if you modify email address"
    >
      <UInput placeholder="Email" v-model="state.email" />
    </UFormGroup>

    <UButton
      type="submit"
      color="black"
      valiant="solid"
      label="Save"
      :pending="pending"
    />
  </UForm>
</template>

<script setup>
import { z } from "zod";

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const { toastSuccess, toastError } = useAppToast();
const pending = ref(false);

const state = ref({
  name: "",
  email: user.value.email,
});

const schema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email(),
});
</script>
