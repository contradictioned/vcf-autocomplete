import '@vaadin/vaadin-lumo-styles/style';

const theme = document.createElement('dom-module');
theme.id = 'vcf-autocomplete-lumo';
theme.setAttribute('theme-for', 'vcf-autocomplete');
theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
