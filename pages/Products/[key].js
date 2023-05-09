import { useRouter } from 'next/router'
import Cards from '@/component/card/Cards';

const arr =[
    { id: 1,quantity:0, title: "Somany Matt 600x600  600x600", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "tiles/mobTile1.png.webpbrand/KOHLER.webp" },
    { id: 2,quantity:0, title: "Somany Matt 600x600", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net/dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJrMnFyZnVyNDRic2hnN3Y2cjZwMW44bmt1dWNqIiwiZmlsZW5hbWUiOiJQYWludCBwbHAgYmFubmVyIG1vYmlsZS53ZWJwIiwiY29udGVudF90eXBlIjoiaW1hZ2Uvd2VicCIsImJsb2Jfa2V5IjoiazJxcmZ1cjQ0YnNoZzd2NnI2cDFuOG5rdXVjaiIsImNvbnZlcnRfd2VicCI6dHJ1ZX0.g9MIU_E4whojs3vyz_vkMmb0qhcvJO5Ewhr28hPyGQc" },
    { id: 3,quantity:0, title: "Somany Matt 600x600", category: "tile", subCategory: "Kitchen Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy9wb25nNGg5MHNuYWJ6ZXBlOGlxazRld3A3amRpLzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjMwMDAwMDIyMjdfMS5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJwb25nNGg5MHNuYWJ6ZXBlOGlxazRld3A3amRpIiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.-cjgMKTNREDQfm8CjAQb4gUXqsgw4PPU_yu7Pp3B3Ew" },
    { id: 4,quantity:0, title: "Somany Matt 600x600", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy9tazJ1dmFzZzZmNnB3cXVhYXVrbDVhM3E2Ym00LzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjIwMDAwMDUyNzlfMS5KUEciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJtazJ1dmFzZzZmNnB3cXVhYXVrbDVhM3E2Ym00IiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.d8QJZd7o8i2Ka2BfFGllSdXb6MWVaZetUGiVlxo-JRc" },
    { id: 5,quantity:0, title: "Somany Matt 600x600  600x600", category: "tile", subCategory: "wall Tiles", Brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "brand/KOHLER.webp" },
    { id: 6,quantity:0, title: "Somany Matt 600x600", category: "tile", subCategory: "Floor Tiles", brand: "somany", discount: 0, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy9kMHlnaGR3YmRnODZ6amdrOTBlOWIycmFxaW90LzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjMwMDAwMDIyMjFfMS5qcGciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiJkMHlnaGR3YmRnODZ6amdrOTBlOWIycmFxaW90IiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.td7BAtW-0TADkZkbrpcZV3XnOTbH9IPghBopmuzIJJo" },
    { id: 7,quantity:0, title: "Somany Matt 600x600 ", category: "tile", subCategory: "wall Tiles", brand: "somany", discount: 10, model: "MMLLSS232", price: 250, size: "3000*300", imgUrl: "https://d2k503pumj0lc5.cloudfront.net//dalmia/disk?object_token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2YXJpYW50cy83b2x6bzN1cXVxZ2l4ZndoMndneWdiMzZ3eTFrLzcyOGU2MmU4ZmNlMDFlNTFlODM4ODg2YjQ3ZmYyZjE5N2QwNDQ2ZmI0ZGI5NGZiNDI0N2VhZmNhMjZlZDc4MmQiLCJmaWxlbmFtZSI6IjIwMDAwMDE4NjlfMS5KUEciLCJjb250ZW50X3R5cGUiOiJpbWFnZS9qcGVnIiwiYmxvYl9rZXkiOiI3b2x6bzN1cXVxZ2l4ZndoMndneWdiMzZ3eTFrIiwidmFyaWF0aW9uX2tleSI6ImV5SmZjbUZwYkhNaU9uc2liV1Z6YzJGblpTSTZJa0pCYURkRGFtOU5Xak5LYUdSdGJEQmxWV3RwUXpKT2JHSnVVbXhqWjFrMlFtdFdWVTluZEhsYVdFNXdaVzFXU2tsbk1IaE9WRUkwVFZSVmQxQm5XVGRDYkZFMlF6SldOR1JIVm5Wa1JVRklUMmM1YVZsWFRuSmFNMHAyWkZjMWExTlRTVXBqTW1oMlpIZFpOMEpzVVRaRVNFWXhXVmQ0Y0dSSWJIQldVVDA5SWl3aVpYaHdJanB1ZFd4c0xDSndkWElpT2lKMllYSnBZWFJwYjI0aWZYMD0tLWFhMGIxNzJiZGY3YjdmZTA0YWRkNDgxMzU3OTRhZGUwMDM4Yjg4M2EiLCJjb252ZXJ0X3dlYnAiOnRydWV9.Pq5m9OJJXLMwwS-g1BrhYqI9b-kVCNC_yzqccD-5zlo" },
]

const Key = () => {
    const router = useRouter()
    const { key } = router.query;
    const items = arr.filter((item)=>(item.subCategory.toLocaleLowerCase() === key?.toLocaleLowerCase()))
    return (
        <Cards items={items} />
    )
}

export default Key