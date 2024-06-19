"use client"

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Order, OrderStatus } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { Check, ChevronsUpDown } from 'lucide-react'
import React from 'react'
import { changeOrderStatus } from './actions'
import { useRouter } from 'next/navigation'

type Props = {}

const StatusDropdown = ({ id, orderStatus }: { id: string, orderStatus: OrderStatus }) => {
  const router = useRouter();

  const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
    awaiting_shipment: "Awaiting Shipment",
    fulfilled: "Fulfilled",
    shipped: "Shipped",
  };

  const {mutate: onDropdownChange} = useMutation({
    mutationKey: ["change-order-status"],
    mutationFn: changeOrderStatus,
    onSuccess: () => router.refresh(),
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-52 flex justify-between items-center'>
          {LABEL_MAP[orderStatus]}
          <ChevronsUpDown className='size-4 opacity-50'/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='p-0'>
        {Object.keys(OrderStatus).map((status) => (
          <DropdownMenuItem key={status} className={cn("flex text-sm gap-1 items-center p-2.5 cursor-default hover:bg-zinc-100", {
            "bg-zinc-100": orderStatus === status,
          })} onClick={() => onDropdownChange({id, newStatus: status as OrderStatus})}>
            <Check className={cn("mr-2 size-4 text-yellow-800", orderStatus === status ? "opacity-100" : "opacity-0")}/>
          {LABEL_MAP[status as OrderStatus]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusDropdown