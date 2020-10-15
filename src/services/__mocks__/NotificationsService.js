let count = 0;

export default {
  __setCount(_count) {
    count = _count;
  },
  async GetNotifications() {
    console.log("GOOD JOB! USING MOCK SERVICE");
    return { count };
  }
}
