# red-components
Collection of React components used by my applications.

## Installation

`npm i red-components`

## Usage

`import { Component1, Component2 } from "red-components";`

## Tailwind config

You have to add the following lines to `safelist` in `tailwind.config.ts`:
```typescript
safelist: [
    { pattern: /^blur-(sm|md|lg|xl|2xl|3xl)$/ },
    { pattern: /^brightness-(0|50|75|90|95|100|105|110|125|150|200)$/ },
    { pattern: /^select-(auto|all|text|none)$/ },
    { pattern: /^contrast-(0|50|75|100|125|150|200)$/ },
    { pattern: /^hue-rotate-(0|15|30|60|90|180)$/ },
    { pattern: /^saturate-(0|50|100|150|200)$/ },
]
```

## Components

### Badge

Usage: `<Badge type="">Example</Badge>`

type can be the following values: `"success" | "error" | "warning" | "info" | "neutral" | "indigo" | "purple" | "pink"`

### Select control

Usage: `<SelectControl type=""> Example </SelectControl>"`

type can be the following values: `"auto" | "all" | "text" | "none"`

Select the type of the user selection in the children.

### Top Banner

Usage: `<TopBanner title="" description"" buttonText="" buttonLink="" />`

`title` The title of the banner. It will be bold

`description` The description of the banner. It will be normal

`buttonText` The text for the action button

`buttonLink` The link for the action button

<br>
Creates a modern banner for the top of a website with a title, description and a link button.

## Typography

There are several typography components used to style texts. The names are self-explanatory.

- `FontMono`
- `FontSans`
- `FontSerif`
- `InlineCode`
- `TypoH1`
- `TypoH2`
- `TypoH3`
- `TypoH4`
- `TypoLarge`
- `TypoMuted`
- `TypoP`
- `TypoQuote`
- `TypoSmall`

## Tables

The table syntax is pretty similar to HTML:

```tsx
return (
    <Table>
        <TableHead>
            <TableRow>
                <TableHeader>Column 1</TableHeader>
                <TableHeader>Column 2</TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableContent>Example 1</TableContent>
                <TableContent>Example 2</TableContent>
            </TableRow>
        </TableBody>
    </Table>
);
```

## Building

You can build this small library using `npm run build`. The output files will be placed in the `dist`-Folder.