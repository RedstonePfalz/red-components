# red-components
Collection of React components used by my applications.

## Installation

`npm i red-components`

## Usage

`import { Component1, Component2 } from "red-components";`

## Tailwind config

You have to add the following lines in your main css:
```css
@import "tailwindcss";
@plugin "tailwindcss-react-aria-components";
@source "[npm root folder]/node_modules/red-components"
```

## Components

### Badge

Usage: `<Badge type="">Example</Badge>`

type can be the following values: `"success" | "error" | "warning" | "info" | "neutral" | "indigo" | "purple" | "pink"`

### Bottom Navigation

Usage:
```tsx
return(
    <BottomNavigation>
        <BottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </BottomNavigationItem>
        <BottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </BottomNavigationItem>
        <BottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </BottomNavigationItem>
        <BottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </BottomNavigationItem>
    </BottomNavigation>
);
```

or

```tsx
return(
    <RoundedBottomNavigation>
        <RoundedBottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </RoundedBottomNavigationItem>
        <RoundedBottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </RoundedBottomNavigationItem>
        <RoundedBottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </RoundedBottomNavigationItem>
        <RoundedBottomNavigationItem item_text="test" onClick={click}>
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </RoundedBottomNavigationItem>
    </RoundedBottomNavigation>
);
```

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

## Credits

This library is built using [TailwindCSS](https://tailwindcss.com/), TypeScript, React and [Rollup](https://rollupjs.org/).