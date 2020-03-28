<template>
  <div>
    <Header :title="title" :subtitle="subtitle" />
    <div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm" v-for="(plan, index) in plans" :key="index">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">{{ plan.title }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              ${{ plan.price }} <small class="text-muted">/ mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li v-for="(feature, index) in plan.features" :key="index">{{ feature }}</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block" :class="plan.linkStyle">
              {{ plan.linkTitle }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: { Header },
  data() {
    return {
      title: 'Home Page',
      subtitle: 'Quickly build an effective pricing table for your potential customers.',
      plans: [
        {
          title: 'Free',
          price: 0,
          features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
          linkTitle: 'Sign up for free',
          linkStyle: 'btn-outline-primary',
        },
        {
          title: 'Pro',
          price: 15,
          features: [
            '30 users included',
            '15 GB of storage',
            'Phone and email support',
            'Help center access',
          ],
          linkTitle: 'Get started',
          linkStyle: 'btn-primary',
        },
        {
          title: 'Enterprise',
          price: 29,
          features: [
            '30 users included',
            '30 GB of storage',
            'Phone and email support',
            'Help center access',
          ],
          linkTitle: 'Contact ss',
          linkStyle: 'btn-primary',
        },
      ],
    };
  },
};
</script>
