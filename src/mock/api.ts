export const mockApi = async (score: number) => {
  return new Promise((resolve, reject) => {
    if (!score) {
      reject(new Error('Not scored'))
    }
    setTimeout(() => {resolve({success: true, score})}, 500);
  })
}