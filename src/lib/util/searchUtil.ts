export function highlight(text: string, search: string) {
    if (search) {
      return text.replace(
        new RegExp(search, "gi"),
        (match) => `<span class="bg-yellow-200">${match}</span>`
      );
    }

    return text;
  }