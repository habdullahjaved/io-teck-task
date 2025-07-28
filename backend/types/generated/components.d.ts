import type { Attribute, Schema } from '@strapi/strapi';

export interface SharedHeroSlider extends Schema.Component {
  collectionName: 'components_shared_hero_sliders';
  info: {
    description: '';
    displayName: 'HeroSlider';
    icon: 'play';
  };
  attributes: {
    autoplay: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ctatext: Attribute.String;
    ctaurl: Attribute.String;
    mediagallery: Attribute.Media<'images' | 'videos'>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedMenuMenuItem extends Schema.Component {
  collectionName: 'components_shared_menu_menu_items';
  info: {
    description: '';
    displayName: 'menu.menu_item';
  };
  attributes: {
    dropdown_services: Attribute.Relation<
      'shared.menu-menu-item',
      'oneToMany',
      'api::service.service'
    >;
    is_dropdown: Attribute.Boolean;
    label: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.hero-slider': SharedHeroSlider;
      'shared.menu-menu-item': SharedMenuMenuItem;
    }
  }
}
