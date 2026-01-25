export const fetchPost = async (postId: string): Promise<string | undefined> => {
    const res = await fetch(`/posts/${postId}.md`);
    // oxlint-disable-next-line no-magic-numbers
    if (res.status === 404) {
        // oxlint-disable-next-line unicorn/no-useless-undefined
        return undefined;
    }

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    return res.text();
};
