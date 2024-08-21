import { renderHook, act, waitFor } from '@testing-library/react';
import { useApi } from './useSaveApi'; 
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

fetchMock.enableMocks();
const setOpenModal = jest.fn();

describe('useApi Hook', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should set loading state and fetch data successfully', async () => {
    const mockResponse = { success: true };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const { result } = renderHook(() => useApi('http://test-endpoint.com', 'POST')); 

    act(() => {
      result.current.fetchData({ test: 'data' }, setOpenModal); 
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.response).toEqual(mockResponse);
    expect(result.current.error).toBe(null);
    expect(setOpenModal).toHaveBeenCalledWith(true); 
  });
  
  test('should handle fetch errors', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch'));

    const { result } = renderHook(() => useApi('http://test-endpoint.com', 'POST'));

    act(() => {
      result.current.fetchData({ test: 'data' }, setOpenModal);
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.response).toBe(null);
    expect(result.current.error).toEqual(new Error('Failed to fetch'));
  });
});