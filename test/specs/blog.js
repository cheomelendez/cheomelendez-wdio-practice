import BlogPage from "../pages/blog-page";

describe("Exercise 2 - Blog", () => {
  it("Get list of recent posts, assert length of each item and count of rows", async () => {
    //await browser.url('/blog');
    await BlogPage.open();

    //const itemList = await $$('#recent-posts-3 ul li');
    const itemList = await BlogPage.firstItemList;

    for (const item of itemList) {
      const text = await item.getText();
      await expect(text.length).toBeGreaterThan(12);
    }
    await expect(itemList).toBeElementsArrayOfSize({ lte: 5 });
  });
});
