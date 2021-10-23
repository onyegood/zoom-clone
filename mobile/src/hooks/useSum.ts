
const useSum = () => {
  const getSum = ({ arr }: { arr: number[] }) => arr.reduce((prev: number, curr) => prev + curr, 0)

  return {
    getSum
  }
}

export default useSum;