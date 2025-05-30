<script setup>
import tokens from "@tapsioss/theme/tokens";
import "@tapsioss/theme/css-variables";
import flattenTokens from '../utils/flattenTokens';

const colorTokensInfo = flattenTokens(tokens.color, 'color')

const solidColors = colorTokensInfo.filter(c => !c.token.includes('gradient'));

const gradientColors = colorTokensInfo.filter(c => c.token.includes('gradient'));
</script>

# Color Tokens

The following tokens outline specific roles and usage guidelines for each color.
From primary actions to background accents, they ensure optimal contrast, visual
hierarchy, and accessibility throughout your interface.

## Solid Colors

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>JS Usage</th>
        <th>CSS Token</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in solidColors">
        <td><code>tokens.{{ row.path }}</code></td>
        <td><code>--tapsi-{{ row.token }}</code></td>
        <td>
          <div>
            <div :style="{marginRight: '4px', verticalAlign: 'middle', background: row.value,width: '20px',height: '20px', display: 'inline-block', borderRadius: '4px'}"></div>
            <code>
              {{ row.value }}
            </code>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Gradient Colors

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>JS Usage</th>
        <th>CSS Token</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in gradientColors">
        <td><code>tokens.{{ row.path }}</code></td>
        <td><code>--tapsi-{{ row.token }}</code></td>
        <td>
          <div>
            <div :style="{marginRight: '4px', verticalAlign: 'middle', background: row.value,width: '20px',height: '20px', display: 'inline-block', borderRadius: '4px'}"></div>
            <code>
              {{ row.value }}
            </code>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
